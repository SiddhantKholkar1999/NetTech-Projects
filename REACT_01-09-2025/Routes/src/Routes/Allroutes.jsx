import { Route, Routes } from "react-router-dom";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/dummy" element={<Dummy />} />
      <Route path="/*" element={<Page_404 />} />
    </Routes>
  );
};
