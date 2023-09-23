import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, loading }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      disabled={isSubmitting || loading}
      type="submit"
      className="btn-primary mx-auto disabled:opacity-20 disabled:cursor-not-allowed"
    >
      {isSubmitting || loading ? (
        <div className="flex gap-5 items-center">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-100"></div>
          sending...
        </div>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
