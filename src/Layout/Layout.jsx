import Header from "../Components/UI/Header";
import Footer from "../Components/UI/Footer";
import PropTypes from "prop-types";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto grow flex items-center justify-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
