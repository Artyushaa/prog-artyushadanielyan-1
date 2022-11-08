describe('1. sort', () => {
    test('bubble sort',
        () => {
            let arr = [8, 3, 6, 2, 4];

            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let a = arr[j];
                        arr[j] = arr[j + 1]
                        arr[j + 1] = a
                    }
                }
            }
            expect(arr).toEqual([2, 3, 4, 6, 8])
        })
})