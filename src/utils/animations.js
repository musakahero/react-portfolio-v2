export const appearUp = {
    hidden: {
        y: "5vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
};

export const appearDown = {
    hidden: {
        y: "-5vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
};

export const appearDelayedChildren = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

export const appearInstant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0.5
        }
    }
};

export const appearFromLeft = {
    hidden: {
        opacity: 0,
        x: "-100vh"
    },
    visible: {
        opacity: 1,
        x: "0vh",
        transition: {
            duration: 0.8
        }
    }
};
export const appearFromRight = {
    hidden: {
        opacity: 0,
        x: "100vh"
    },
    visible: {
        opacity: 1,
        x: "0vh",
        transition: {
            duration: 0.8
        }
    }
}

export const navMenuAppearFromRight = {
    hidden: {
        x: "83%",
        transition: {
            type: "tween"
        }
    },
    visible: {
        x: "0%",
        transition: {
            type: "tween"
        }
    }
}

export const rotateElement180 = {
    hidden: {
        rotateY: 0,
        transition: {
            duration: 0.4
        }
    },
    visible: {
        rotateY: 180,
        transition: {
            duration: 0.4
        }
    }
}