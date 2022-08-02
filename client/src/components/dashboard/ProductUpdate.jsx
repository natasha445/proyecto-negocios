import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaDollarSign } from "react-icons/fa";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/products-actions";
import swal from "sweetalert";
import TheSpinner from '../../layout/TheSpinner';


const ProductUpdate = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.ui.updateProductLoading);
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      shipping: product.shipping,
      sku: product.sku,
      quantity: product.quantity
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      brand: Yup.string().required("Required"),
      quantity: Yup.number().required("Required")
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(updateProduct({ product: values, id: productId, token }));
        swal({
          title: "Product Updated!",
          text: `Product: ${values.name} UPDATED!`,
          icon: "success",
          button: "OK!",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <div className="mx-4 my-8">
        <button
          className="px-4 py-2 text-lg uppercase tracking-widest bg-secondary-100 text-white rounded-lg drop-shadow-lg"
          onClick={() => navigate('/admin/dashboard/updateproducts', {replace: true})}
        >
          <span className="mr-2 inline-block">{<HiChevronDoubleLeft />} </span>{" "}
          Back to products
        </button>
      </div>
      <div className="flex m-4 p-8 bg-white shadow-lg">
        <div className="w-3/4">
          <form onSubmit={formik.handleSubmit}>
            {/* nombre */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="name" className="tracking-wider">
                Product name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="form-input rounded w-full bg-gray-100"
                placeholder="Enter product name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.name}
                </p>
              )}
            </div>
            {/* descripcion */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="description" className="tracking-wider">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className="form-textarea w-full h-52 bg-gray-100 rounded-md"
                placeholder="Product description"
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.description}
                </p>
              )}
            </div>
            {/* precio */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="price" className="tracking-wider">
                Price:
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300 text-black">
                  <FaDollarSign />
                </span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  step="any"
                  min="0"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="form-input rounded-r w-full bg-gray-100"
                  placeholder="Product price"
                />
              </div>
              {formik.touched.price && formik.errors.price && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.price}
                </p>
              )}
            </div>
            {/* categoria */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="category" className="tracking-wider">
                Category:
              </label>
              <select
                name="category"
                id="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                className="form-select bg-gray-100"
              >
                <option value=""></option>
                <option value="guitar">Guitar</option>
                <option value="bass">Bass</option>
                <option value="drums">Drums</option>
                <option value="keys and MIDI">Keys and MIDI</option>
                <option value="amps and effects">Amps and Effects</option>
                <option value="microphones">Microphones</option>
              </select>
              {formik.touched.category && formik.errors.category && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.category}
                </p>
              )}
            </div>
            {/* marca */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="brand" className="tracking-wider mb-3">
                Brand:
              </label>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    step="any"
                    min="0"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                    className="form-input rounded-r w-full bg-gray-100"
                    placeholder="Brand"
                  />
                </div>
              </div>
              {formik.touched.brand && formik.errors.brand && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.brand}
                </p>
              )}
            </div>
            {/* cantidad */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="quantity" className="tracking-wider mb-3">
                Quantity:
              </label>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    step="any"
                    min="0"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    className="form-input rounded-r w-full bg-gray-100"
                    placeholder="Quantity"
                  />
                </div>
              </div>
              {formik.touched.quantity && formik.errors.quantity && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.quantity}
                </p>
              )}
            </div>
            {/* envio */}
            <div className="flex items-center space-x-3 mb-8">
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={() => formik.setFieldValue('shipping', !formik.values.shipping)}
                value={formik.values.shipping}
                checked={formik.values.shipping}
                className="form-checkbox"
              />
              <label htmlFor="shipping" className="tracking-wider">
                Free shipping
              </label>
            </div>
            <hr />
            {loading ? <TheSpinner /> : 
            <button
              type="submit"
              className="px-4 py-2 block my-12 ml-auto font-bold uppercase text-secondary-100 border border-secondary-100 hover:text-white hover:bg-secondary-100 rounded-md"
            >
              Update Product
            </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
