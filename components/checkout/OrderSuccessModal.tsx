import Modal from "react-modal";

export default function OrderSuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Order completed successfully"
      style={{
        overlay: {
          backgroundColor: "rgba(15, 23, 42, 0.7)",
        },
        content: {
          maxWidth: "450px",
          height: "fit-content",
          margin: "auto",
          inset: "0",
          borderRadius: "24px",
          padding: "32px",
          border: "none",
        },
      }}
    >
      <div className="text-center space-y-5">
        <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-3xl mx-auto">
          ✓
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">
            Order Completed
          </h2>

          <p className="text-slate-500 leading-7">
            Your order was submitted successfully and is now being processed.
          </p>
        </div>

        <button
          onClick={onClose}
          className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition"
        >
          Continue Shopping
        </button>
      </div>
    </Modal>
  );
}