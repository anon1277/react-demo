// import { useActionState } from 'react';

// const   UseActionStateDemo =() => {
//   const handleSubmit = (previousData, formData) => {
//     let name = formData.get('name');
//     let password = formData.get('password');
//     console.log("handleSubmit called" ,name ,password);
//   };

//   const [data, action, pending] = useActionState(handleSubmit, undefined);

//   return (
//     <div>
//       <h1>useActionState Hook in React js</h1>
//       <form action={action}>
//         <input type="text" placeholder="enter name" name="name" />
//         <br /><br />
//         <input type="password" placeholder="enter password" name="password" />
//         <br /><br />
//         <button>Submit data</button>
//       </form>
//     </div>
//   );
// }


// export default UseActionStateDemo;