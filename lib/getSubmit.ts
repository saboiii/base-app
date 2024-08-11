import { Dispatch, SetStateAction } from "react";

export const getSubmit = (
  set: (targets: gsap.TweenTarget, vars: gsap.TweenVars) => gsap.core.Tween,
  fromTo: (
    targets: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => gsap.core.Tween,
  button: HTMLButtonElement,
  setActive: Dispatch<SetStateAction<boolean>>,
  setInput: Dispatch<SetStateAction<string>>
) => {
  return [
    {
      "--text-opacity": 0,
      "--success-opacity": 1,
      duration: 0.375,
      onComplete() {
        setTimeout(() => {
          fromTo(
            button,
            { opacity: 0 },
            {
              opacity: 1,
              y: 0,
              delay: 0.1,
              duration: 0.375,
              clearProps: true,
              onComplete() {
                setActive(false);
                setInput("");
              },
            }
          );
        }, 200);
      },
    },
  ];
};
