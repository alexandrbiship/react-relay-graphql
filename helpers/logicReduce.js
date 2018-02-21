export const evalAnds = ands => ands.reduce((evaluated, condition) => evaluated && condition);
export const evalOrs = ors => ors.reduce((evaluated, condition) => evaluated || condition);
