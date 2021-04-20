import React, { useEffect } from 'react';

function HistorySample({ history }) {

    const goback = () => {
        history.goback();
    }

    const goHome = () => {
        history.push('/');
    }

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실껀가요?');
        return () => {
            unblock();
        }
    }, [history]);

    const replaceToHome = () => {
        history.replace('/');
    }

    return (
        <div>
            <button onClick={goback}>
                뒤로
            </button>
            <button onClick={goHome}>
                홈으로
            </button>
            <button onClick={replaceToHome}>
                홈으로 (Replace)
            </button>
        </div>
    );
}

export default HistorySample;