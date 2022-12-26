import * as transformers from "@/transformers";
import * as sanitizers from "@/sanitizers";
import * as validators from "@/validators";
import * as mocking from "@/mocking";
import * as randomizers from "@/randomizers";

export default {
  ...transformers,
  ...sanitizers,
  ...validators,
  ...mocking,
  ...randomizers,
};
