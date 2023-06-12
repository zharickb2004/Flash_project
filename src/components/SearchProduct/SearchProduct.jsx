import React, { useEffect } from "react";
import { useState } from "react";
import { TodoGetApis } from "../../Apis/Apis";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "./useForm";
function SearchProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchProduct, setSearchProduct] = useState([]);
  const [show, setShow] = useState(false);

  const { q = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProduct(0, 0);
      setSearchProduct(response.data.rows);
    })();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchText}`);
  };

  const filterProduct = searchProduct.filter((items) =>
    items.name_product.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleClickSearch = (searchName) => navigate(`/search?q=${searchName}`);
  return (
    <>
      <div className="container-s border absolute top-0 left-[35%] mt-5 bg-white rounded-md  h-fit w-[700px] p-2 shadow-md ">
        <div className="compone">
          <div className="contain">
            <div className="list-componet">
              <form onSubmit={handleSearch} className="w-full  ">
                <div className="flex items-center ">
                  <div className="px-2 border-e-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <g
                        fill="none"
                        stroke="#777777"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <circle cx="14" cy="14" r="12" />
                        <path d="m23 23l7 7" />
                      </g>
                    </svg>
                  </div>
                  <div
                    className="input w-full h-full "
                    onClick={() => setShow(!show)}
                  >
                    <input
                      type="text"
                      placeholder="Buscar"
                      className="w-full  p-2 "
                      onChange={handleInputChange}
                      value={searchText}
                      autoComplete="off"
                      name="searchText"
                    />
                  </div>
                  <div className="px-2 border-s-2">
                    <button type="reset" onClick={() => setShow(!show)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="#777777"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 30L30 2m0 28L2 2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={
            show
              ? "listCompo h-[17rem] overflow-hidden m-2 block "
              : "listCompo h-52 overflow-hidden m-2  hidden"
          }
        >
          {filterProduct.length > 0 ? (
            <>
              {filterProduct.map((i) => (
                <div
                  key={i.id_product}
                  className="flex items-center my-2  hover:bg-gray-100 cursor-pointer p-1"
                  onClick={() => handleClickSearch(i.name_product)}
                >
                  <div className="icon m-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                    >
                      <path
                        fill="#9ca4ad"
                        d="M10 .188A9.812 9.812 0 0 0 .187 10A9.812 9.812 0 0 0 10 19.813c2.29 0 4.393-.811 6.063-2.125l.875.875a1.845 1.845 0 0 0 .343 2.156l4.594 4.625c.713.714 1.88.714 2.594 0l.875-.875a1.84 1.84 0 0 0 0-2.594l-4.625-4.594a1.824 1.824 0 0 0-2.157-.312l-.875-.875A9.812 9.812 0 0 0 10 .188zM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zM4.937 7.469a5.446 5.446 0 0 0-.812 2.875a5.46 5.46 0 0 0 5.469 5.469a5.516 5.516 0 0 0 3.156-1a7.166 7.166 0 0 1-.75.03a7.045 7.045 0 0 1-7.063-7.062c0-.104-.005-.208 0-.312z"
                      />
                    </svg>
                  </div>
                  <div className="m-2 text-md text-gray-800">
                    {i.name_product}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h1 className="m-2 text-xl text-gray-800 ">
              No se encontro el producto{" "}
              <span className="font-bold text-black capitalize">
                {searchText}
              </span>
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchProduct;
