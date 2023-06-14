/**
 * Получаем данные для фильтра
 */
export const getData = async () => {
    const res = await fetch('https://filter-test-16b76-default-rtdb.firebaseio.com/filters.json', {
        method: 'get',
    });

    return res.json();
};
