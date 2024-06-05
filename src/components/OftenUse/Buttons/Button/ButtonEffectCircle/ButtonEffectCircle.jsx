
import style from './ButtonEffectCircle.module.scss';
import { memo, useEffect, useState } from "react";
import { Transition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
/* import { useSpring, animated } from "react-spring"; */




///HandleSubmit
export const ButtonEffectCircle = memo(({ isDisabled, onClickFC, textButton, loading, type, ...props }) => {

    const [isPCDevice, setIsPCDevice] = useState(true);
    const [widthPx, setWidthPx] = useState(0);

    useEffect(() => {
        const testDevices = () => {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // код для мобильных устройств
                setIsPCDevice(false);
            } else {
                setIsPCDevice(true);

                // код для обычных устройств
            }
        };
        testDevices();
    }, []);
    useEffect(() => {
        /* const calcParametrs = (e) => {
        
            const paramsW = e.target.offsetWidth;
            const paramsH = e.target.offsetHeight;
    
    
    
            setButtonParametrs({
                height: paramsH,
                width: paramsW,
            });
    
    
        }; */
        window.addEventListener('resize', () => { setWidthPx(window.innerWidth) });
    }, []);









    const [isActiveButton, setIsActiveButton] = useState(false);
    const [circlePoint, setCirclePoint] = useState({
        y: 0,
        x: 0,
    });
    const [buttonParametrs, setButtonParametrs] = useState({
        width: 0,
        height: 0,
    });






    const checkParametrsButtom = (e) => {
        

        if (e.target.offsetWidth !== buttonParametrs.width || e.target.offsetHeight !== buttonParametrs.height) {
            
            setButtonParametrs({width:e.target.offsetWidth, height:e.target.offsetHeight,});
        }
    };

    const addActive = (e) => {
        if (isPCDevice) {
            if (circlePoint.x !== e.pageX - window.scrollX - e.target.getBoundingClientRect().left & circlePoint.y !== e.pageY - window.scrollY - e.target.getBoundingClientRect().top) {
                checkParametrsButtom(e);
                calcPoint(e);
                setIsActiveButton(false);

            }

            if (!buttonParametrs.width && !buttonParametrs.height) {
                setIsActiveButton(true);
                calcPoint(e);
                setButtonParametrs({
                    width: e.target.offsetWidth,
                    height: e.target.offsetHeight,
                });


            }
        }
    };

    const removeActive = (e) => {

        /* setButtonParametrs({
             width: 0,
             height: 0,
         }); */
        /*  calcPoint(e); */

        if (isPCDevice) {
            const element = e.target.querySelector('span:nth-child(1)');

            const pointX = e.pageX - window.scrollX - e.target.getBoundingClientRect().left;
            const pointY = e.pageY - window.scrollY - e.target.getBoundingClientRect().top;



            element.style.top = `${pointY / buttonParametrs.height * 100}%`;
            element.style.left = `${pointX / buttonParametrs.width * 100}%`;

        }



        /*   setIsActiveButton(false); */

    };

    const calcPoint = (e) => {

        const pointX = e.pageX - window.scrollX - e.target.getBoundingClientRect().left;
        const pointY = e.pageY - window.scrollY - e.target.getBoundingClientRect().top;



        setCirclePoint({
            y: pointY,
            x: pointX,
        });


    };








    return <div className={style.button}>

        <button type='button' className={isActiveButton ? style._active : ''} onMouseEnter={addActive} onMouseOut={removeActive} onClick={onClickFC} key={uuidv4()} {...props}>



            <span style={{

                top: `${(circlePoint.y / buttonParametrs.height) * 100}%`,
                left: `${(circlePoint.x / buttonParametrs.width) * 100}%`,
            }}
                className={[style.circle].join(' ')}>
            </span>







            <span>{textButton}</span></button>
    </div>
});

