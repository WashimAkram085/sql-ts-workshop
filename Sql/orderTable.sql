-- product table
CREATE TABLE IF NOT EXISTS Product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_quantity INT NOT NULL
);
-- isert data into product table
INSERT INTO Product (product_name, product_quantity) VALUES
('Product A', 100),
('Product B', 200),
('Product C', 300);

----------------------------------------------------------------------
--order table
CREATE TABLE IF NOT EXISTS OrderTable (
    order_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product (product_id)
);
-- insert data into order table
INSERT INTO OrderTable (product_id, order_date) VALUES
(1, '2024-01-01'),
(2, '2024-01-02'),
(3, '2024-01-03'),
(1, '2024-01-04'),
(2, '2024-01-05');

----------------------------------------------------------------------

-- Function to return all orders placed within a given date range
CREATE OR REPLACE FUNCTION orders_dateRange(start_date DATE, end_date DATE)
RETURNS TABLE(order_id INT, product_id INT, order_date DATE, product_name VARCHAR) AS $$
BEGIN
    RETURN QUERY
    SELECT OrderTable.order_id, OrderTable.product_id, OrderTable.order_date, Product.product_name
    FROM OrderTable
    JOIN Product ON OrderTable.product_id = Product.product_id
    WHERE OrderTable.order_date BETWEEN start_date AND end_date;
END;
$$ LANGUAGE plpgsql;

--calling the function
SELECT * FROM orders_dateRange('2024-01-01', '2024-01-03');