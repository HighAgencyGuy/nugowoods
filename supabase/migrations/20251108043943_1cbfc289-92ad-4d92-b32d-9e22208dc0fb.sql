-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  image_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  wood_type text,
  image_url text,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  items jsonb NOT NULL,
  total_amount numeric(10,2) NOT NULL,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS public.portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  location text,
  image_url text NOT NULL,
  tags text[],
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_roles table for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id
      AND role = 'admin'
  );
$$;

-- RLS Policies for categories (public read, admin write)
CREATE POLICY "Anyone can view active categories"
  ON public.categories FOR SELECT
  USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert categories"
  ON public.categories FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update categories"
  ON public.categories FOR UPDATE
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete categories"
  ON public.categories FOR DELETE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for products (public read, admin write)
CREATE POLICY "Anyone can view active products"
  ON public.products FOR SELECT
  USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert products"
  ON public.products FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update products"
  ON public.products FOR UPDATE
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete products"
  ON public.products FOR DELETE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for orders (anyone can create, admins can view all)
CREATE POLICY "Anyone can create orders"
  ON public.orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all orders"
  ON public.orders FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update orders"
  ON public.orders FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for portfolio (public read, admin write)
CREATE POLICY "Anyone can view active portfolio items"
  ON public.portfolio FOR SELECT
  USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert portfolio items"
  ON public.portfolio FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update portfolio items"
  ON public.portfolio FOR UPDATE
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete portfolio items"
  ON public.portfolio FOR DELETE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for user_roles (only admins can manage)
CREATE POLICY "Admins can view roles"
  ON public.user_roles FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert roles"
  ON public.user_roles FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER set_updated_at_categories
  BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_products
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_orders
  BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_portfolio
  BEFORE UPDATE ON public.portfolio
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Insert initial categories
INSERT INTO public.categories (name, slug, description, display_order) VALUES
  ('Woodwork', 'woodwork', 'Handcrafted wooden furniture', 1),
  ('Metalwork', 'metalwork', 'Custom metal furniture and fixtures', 2),
  ('Hybrid', 'hybrid', 'Unique wood and metal combinations', 3),
  ('Interior Decorating', 'interior-decorating', 'Complete interior design solutions', 4),
  ('Dining', 'dining', 'Dining tables and chairs', 5),
  ('Living Room', 'living-room', 'Sofas, coffee tables, and more', 6),
  ('Bedroom', 'bedroom', 'Beds, wardrobes, and nightstands', 7),
  ('Office', 'office', 'Desks and office furniture', 8);