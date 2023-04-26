import { Image } from "../../../constants"

const Modal = () => {
    return (
        <section>
            <div className="bg-white text-[11.5px] text-gray-600 h-[354px] w-[230px] shadow-2xl rounded-xs flex flex-col items-end mt-10 ml-10">
                <span className="modalcats">
                    <img className='modelcategories' src={Image.Tablet} alt="tablet" />
                    <span className="itemstrans">موبایل و تبلت</span>
                </span>
                
                <span className="modalcats">
                    <img className='modelcategories' src={Image.Img11} alt="laptop" />
                    <span className="itemstrans">لپتاپ و کامپیوتر</span>
                </span>

                <span className="modalcats">
                    <img className='modelcategories' src={Image.stuffs} alt="stuffs" />
                    <span className="itemstrans">لوازم جانبی موبایل</span>
                </span>

                <span className="modalcats">
                    <img className='modelcategories' src={Image.Img6} alt="smartwatch" />
                    <span className="itemstrans">گجت های هوشمند</span>
                </span>

                <span className="modalcats">
                    <img className='modelcategories' src={Image.radio} alt="sounds" />
                    <span className="itemstrans">لوازم صوتی و تصویری</span>
                </span>

                <span className="modalcats">
                    <img className='modelcategories' src={Image.machine} alt="officemachine" />
                    <span className="itemstrans">ماشین های اداری</span>
                </span>

                <span className="modalcats">
                    <img className='modelcategories' src={Image.console} alt="phone" />
                    <span className="itemstrans">کنسول بازی</span>
                </span>
            </div>
            <div></div>
        </section>
    )
}

export default Modal