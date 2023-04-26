import React, {useCallback} from "react";

export default function MainPage() {
    const getGreeting = useCallback(() => {
        const currentHours = new Date().getHours()
        let greeting

        if (currentHours >= 5 && currentHours <= 11) {
            greeting = 'Доброе утро!'
        }
        else if (currentHours >= 12 && currentHours <= 16) {
            greeting = 'Добрый день!'
        }
        else if (currentHours >= 17 && currentHours <= 23) {
            greeting = 'Добрый вечер!'
        }
        else {
            greeting = 'Доброй ночи!'
        }

        return greeting
    }, [])

    return(
        <div id="Main-page" className="d-flex flex-column m-auto">
            <span className="d-flex m-auto text-center">{ getGreeting() }</span>
        </div>
    )
}