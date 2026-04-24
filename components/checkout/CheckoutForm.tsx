export default function CheckoutForm({
  name,
  shippingAddress,
  email,
  phoneNumber,
  errors,
  onNameChange,
  onShippingAddressChange,
  onEmailChange,
  onPhoneNumberChange,
  onSubmit,
}: {
  name: string;
  shippingAddress: string;
  email: string;
  phoneNumber: string;
  errors: {
    name?: string;
    shippingAddress?: string;
    email?: string;
  };
  onNameChange: (value: string) => void;
  onShippingAddressChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full bg-slate-100 border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:border-orange-400"
        />

        {errors.name && (
          <p className="text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="shippingAddress"
          className="block text-sm font-medium text-slate-700"
        >
          Shipping Address
        </label>

        <input
          id="shippingAddress"
          type="text"
          value={shippingAddress}
          onChange={(e) => onShippingAddressChange(e.target.value)}
          className="w-full bg-slate-100 border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:border-orange-400"
        />

        {errors.shippingAddress && (
          <p className="text-sm text-red-500">
            {errors.shippingAddress}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full bg-slate-100 border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:border-orange-400"
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-slate-700"
        >
          Phone Number (optional)
        </label>

        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          className="w-full bg-slate-100 border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:border-orange-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-400 text-white font-medium py-4 rounded-2xl transition"
      >
        Complete Order
      </button>
    </form>
  );
}