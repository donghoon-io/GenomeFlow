import { c as create_ssr_component, a as compute_rest_props, v as validate_component } from "./index-20d5dc34.js";
import { B as BaseChart, L as LineChart } from "./GaugeChart-fa4301b9.js";
const LineChart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["chart", "ref"]);
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(BaseChart, "BaseChart").$$render($$result, Object.assign($$restProps, { Chart: LineChart }, { ref }, { chart }), {
      ref: ($$value) => {
        ref = $$value;
        $$settled = false;
      },
      chart: ($$value) => {
        chart = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export { LineChart_1 as L };
