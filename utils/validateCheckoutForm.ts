export default function validateCheckoutForm({ name, shippingAddress, email }: { name: string; shippingAddress: string; email: string }) {
  const errors: {
    name?: string;
    shippingAddress?: string;
    email?: string;
  } = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  }

  if (!shippingAddress.trim()) {
    errors.shippingAddress = "Shipping address is required.";
  } else if (shippingAddress.trim().length < 8) {
    errors.shippingAddress = "Please enter a valid address.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}