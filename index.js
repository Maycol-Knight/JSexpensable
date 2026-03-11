const DOMHandler = function(parentElement){
  const parent = document.querySelector(parentElement);
  if(!parent) throw new Error("Parent not found");
  return{
    load(module) {
      parent.innerHTML = module;
    },
  };
};
const App = DOMHandler("#root");
console.log(App);

//App.load("<h1>Happy Hacking</h1>")

//Create module
function createHeader(){
  const template = "<h1>Header</h1>"
  return {
    render(){
      return template;
    } 
  }
}
const Header = createHeader();
App.load(Header.render());