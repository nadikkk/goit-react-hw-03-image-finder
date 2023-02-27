import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox'
import css from './Modal.module.css';


export default function Modal({bigImg}) {
// const v = open();
console.log(bigImg);
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={bigImg} alt="Big Pictures" />
      </div>
    </div>
  );
}
// const instance = basicLightbox.create(
// 	` <div class="modal"> <img src="${e.target.dataset.source}" alt="Big Pictures"/> </div> `,
//  {
//   onShow: (instance) => {
// 	 window.addEventListener("keydown", onEscape);
//   },
//   onClose: (instance) => {
// 	 window.removeEventListener("keydown", onEscape);
// 	 },
//  }
// );
//  instance.show();
//  function onEscape(e) {
//  if (e.key === "Escape") {
//  instance.close();
//  }
//  }	
// };
