import transformers from "@/transformers";
import sanitizers from "@/sanitizers";
import checkers from "@/checkers";

export default {
  ...transformers,
  ...sanitizers,
  ...checkers,
};
