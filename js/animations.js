let observer = null;

export const initAnimations = () => {
    if (observer) {
        observer.disconnect();
    }

    observer =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'visible'
                        );
                    }
                });
            },
            {
                threshold: .1
            }
        );

    const elements =
        document.querySelectorAll(
            '.fade-up, .scale-in'
        );

    elements.forEach((element) => {
        if (
            element.classList.contains(
                'visible'
            )
        ) {
            return;
        }
        observer.observe(element);
    });
};