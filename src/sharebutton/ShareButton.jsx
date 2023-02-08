// import React from 'react';
// import useState from "react-router-dom"

// const ShareButton = () => {
//     const [supported, setSupported] = useState(false);
//     const share = async () => {
//         try {
//           await navigator.share({
//             title: 'Share Title',
//             text: 'Share Text',
//             url: 'https://www.example.com',
//           });
//         } catch (error) {
//           console.error('Error sharing:', error);
//         }
//       };

//       useEffect(() => {
//         if (navigator.share) {
//           setSupported(true);
//         }
//       }, []);
//   return (
//     <div>
//     {supported ? (
//       <button onClick={share}>Share</button>
//     ) : (
//       <p>Sharing is not supported on this platform.</p>
//     )}
//   </div>
//   )
// }

// export default ShareButton;