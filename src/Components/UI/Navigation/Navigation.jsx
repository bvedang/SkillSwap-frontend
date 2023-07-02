import NavigationItem from "./NavigationItem";

export default function Navigation() {
  return (
    <ul className="flex flex-col sm:flex-row ">
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/">About</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
    </ul>
  );
}
