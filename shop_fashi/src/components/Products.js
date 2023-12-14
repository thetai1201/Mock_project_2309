import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Pagination } from 'antd';
import { getAllProductApi } from '../service/product';
import "./Products.css"

const Products = ({ products, fetchProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryType, setCategoryType] = useState('ALL');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [allProducts, setAllProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCategoryType('ALL');
  }, []);

  useEffect(() => {
    if (categoryType === 'ALL') {
      setAllProducts(products);
    } else if (categoryType === 'WOMEN') {
      const filteredProducts = products.filter(item => item.categoryType === 'Women');
      setAllProducts(filteredProducts);
    } else if (categoryType === 'MEN') {
      const filteredProducts = products.filter(item => item.categoryType === 'Man');
      setAllProducts(filteredProducts);
    }
  }, [categoryType, products]);

  const handleSearch = async () => {
    try {
      const data = await getAllProductApi({
        search: searchTerm,
        minPrice: minPrice,
        maxPrice: maxPrice,
      });
      setAllProducts(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setCurrentPage(1);
    handleSearch();
  };

  const paginate = page => setCurrentPage(page);

  return (
    <div className="container">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <div className="filter-widget">
            <input
              className="input-field"
              id="searchInput"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />
            <div className="price-inputs">
              <input
                className="input-field"
                id="minPriceInput"
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={event => setMinPrice(event.target.value)}
              />
              <input
                className="input-field"
                id="maxPriceInput"
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={event => setMaxPrice(event.target.value)}
              />
            </div>
            <button className="action-button" onClick={handleSearch}>
              Search
            </button>
            <button className="action-button" onClick={handleClear}>
              Clear
            </button>
            <h4 className="fw-title">Categories</h4>
            <ul className="filter-catagories">
              <li>
                <a onClick={() => setCategoryType('ALL')} href="#">
                  ALL
                </a>
              </li>
              <li>
                <a onClick={() => setCategoryType('WOMEN')} href="#">
                  Women
                </a>
              </li>
              <li>
                <a onClick={() => setCategoryType('MEN')} href="#">
                  Man
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="product-grid">
            {allProducts.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              current={currentPage}
              total={allProducts.length}
              pageSize={itemsPerPage}
              onChange={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
