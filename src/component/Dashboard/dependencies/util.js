import componentsImg from "../../../assest/components.png";
import propsImg from '../../../assest/config.png';
import jsxImg from '../../../assest/jsx-ui.png';
import stateImg from '../../../assest/state-mgmt.png';
import HomeIcon from '../../../assest/homeicon.svg';
import PlusIcon from '../../../assest/pulsicon.svg';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
  

// export function Button({ children, className, mode = 'filled', Icon, ...props}) {
//   let cssClasses = `button ${mode}-button`;
 
//   if (Icon) {
//     cssClasses += ' icon-button';
//   }
 
//   if (className) {
//     cssClasses += ' ' + props.className;
//   }
 
//   return (
//     <button className={cssClasses} {...props}>
//       {Icon && (
//         <span className="button-icon">
//           <Icon />
//         </span>
//       )}
//       <span>{children}</span>
//     </button>
//   );
// }

const onClickFilled =()=>{
  console.log('Filled button clicked');
}

const onClickOutline =()=>{
  console.log('Outline button clicked');
}

const onClickHome =()=>{
  console.log('Home button clicked');
}

export const buttons = [
  { text: "Default", mode: undefined,className:"button filled-button"},
  { text: "Filled (Default)", mode: "filled" ,className:"button  filled-button", onClick:() => onClickFilled()},
  { text: "Outline", mode: "outline",className:"button outline-button",onClick:()=> onClickOutline() },
  { text: "Text", mode: "text",className:"button text-button" },
  { text: "Home", mode: undefined, icon: HomeIcon,className:"button filled-button icon-button" ,onClick: () => onClickHome() },
  { text: "Add", mode: "text", icon: PlusIcon,className:"button text-button icon-button" },
  { text: "Disabled", mode: "filled", disabled: true,className:"button filled-button" },
  { text: "Click me", onClick: () => console.log('Clicked!'),className:"button filled-button"}
];