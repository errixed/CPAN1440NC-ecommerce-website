import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import Modal from "react-modal";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSuccessModal from "@/components/checkout/OrderSuccessModal";
import validateCheckoutForm from "@/utils/validateCheckoutForm";

export default function CheckoutPage() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const router = useRouter();

  const [name, setName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    shippingAddress?: string;
    email?: string;
  }>({});

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  const cartGrandTotal = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  function handleCompleteOrder(event: SubmitEvent) {
    event.preventDefault();

    const newErrors = validateCheckoutForm({
      name,
      shippingAddress,
      email,
    });

    setErrors(newErrors);

    if (newErrors.name || newErrors.shippingAddress || newErrors.email) {
      return;
    }

    setIsSuccessModalOpen(true);
  }

  function handleCloseModal() {
    setIsSuccessModalOpen(false);
    setCartProducts([]);
    router.push("/");
  }

  if (cartProducts.length === 0) {
    return (
      <div className="bg-slate-100 min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center space-y-4 max-w-lg">
          <h1 className="text-3xl font-bold text-slate-900">
            Your cart is empty
          </h1>

          <p className="text-slate-500">
            Add some products before going to checkout.
          </p>

          <button
            onClick={() => router.push("/products")}
            className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-12 space-y-8">
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl shadow-lg">
          <div className="px-8 py-12 space-y-4">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
              Checkout
            </p>

            <h1 className="text-4xl font-bold">
              Complete Your Order
            </h1>

            <p className="text-gray-300 max-w-3xl leading-7">
              Enter your information below to place your order and complete your purchase.
            </p>
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <CheckoutForm
              name={name}
              shippingAddress={shippingAddress}
              email={email}
              phoneNumber={phoneNumber}
              errors={errors}
              onNameChange={setName}
              onShippingAddressChange={setShippingAddress}
              onEmailChange={setEmail}
              onPhoneNumberChange={setPhoneNumber}
              onSubmit={handleCompleteOrder}
            />
          </div>

          <div className="lg:w-[300px] bg-slate-100 rounded-3xl p-6 space-y-4 h-fit">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Order Total
            </p>

            <p className="text-4xl font-bold text-orange-500">
              ${cartGrandTotal.toFixed(2)}
            </p>

            <p className="text-slate-500 text-sm leading-6">
              Your final total includes all selected products in your cart.
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => router.back()}
            className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition"
          >
            Go back
          </button>
        </div>

        <OrderSuccessModal
          isOpen={isSuccessModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}