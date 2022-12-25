import * as transformers from "@/transformers";
import * as sanitizers from "@/sanitizers";
import * as checkers from "@/checkers";
import * as mocking from "@/mocking";
import * as randomizers from "@/randomizers";

export default {
  ...transformers,
  ...sanitizers,
  ...checkers,
  ...mocking,
  ...randomizers,
};
