'use strict';

{
    // 配列
    const a = [1, 5, 10, 100];

    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }

    a.forEach((item, index) => {
        console.log(`${index}:${item}`);
    });
}


