import {motion} from "framer-motion";

const Transition = (OgComponent : any) => {
    return function TransitionComponent(props : any) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <OgComponent {...props} />
            </motion.div>
        );
    };
}

export default Transition;