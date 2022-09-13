const breakPoints = {
  // Extra small devices (portrait phones, less than 576px)
  xs: "(max-width: 575.98px)",
  // Small devices (landscape phones, 576px and up)
  sm: "(min-width: 576px) and (max-width: 767.98px)",
  // Medium devices (tablets, 768px and up)
  md: "(min-width: 768px) and (max-width: 991.98px)",
  // Large devices (desktops, 992px and up)
  lg: "(min-width: 992px) and (max-width: 1199.98px)",
  // Extra large devices (large desktops, 1200px and up)
  xl: "(min-width: 1200px) and (max-width: 1440px)",
  // Double Extra large devices (High res, 1200px and up)
  xxl: "(min-width: 1440px)",
  // behavior for touch browsers
  mobile: "(hover: none)",
  // behavior for non touch browsers
  web: "not all and (hover: none)",

  // Combinations
  xs_sm: "(max-width: 767.98px)",
  xs_lg: "(max-width: 1199.98px)",
  sm_lg: "(min-width: 576px) and (max-width: 1199.98px)",
  xs_md: "(max-width: 991.98px)",
  md_xxl: "(min-width: 768px)",
  lg_xxl: "(min-width: 992px) and (max-width: 1440px)",
  below_xl: "(max-width: 992px)",
};

export default breakPoints;