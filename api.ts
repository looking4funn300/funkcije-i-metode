/**
 * ArraysPlus - advanced functions for arrays (number[]) as MakeCode blocks
 */
//% color=#2b7bb9 weight=100 icon="\uf03a"
namespace ArraysPlus {
    // Pomoćne funkcije i implementacije unaprijed radi kompatibilnosti s PXT
    //% blockId="ap_push" block="push %value to %arr"
    //% arr.shadow=variables_get
    export function push(arr: number[], value: number): void {
        if (!arr) return
        arr.push(value)
    }

    //% blockId="ap_pop" block="pop from %arr"
    //% arr.shadow=variables_get
    export function pop(arr: number[]): number {
        if (!arr || arr.length == 0) return 0
        return arr.pop() || 0
    }

    //% blockId="ap_get" block="get element at index %index of %arr"
    //% index.min=0
    //% arr.shadow=variables_get
    export function get(arr: number[], index: number): number {
        if (!arr || arr.length == 0) return 0
        if (index < 0) index = 0
        if (index >= arr.length) index = arr.length - 1
        return arr[index]
    }

    //% blockId="ap_set" block="set element at index %index of %arr to %value"
    //% index.min=0
    //% arr.shadow=variables_get
    export function set(arr: number[], index: number, value: number): void {
        if (!arr) return
        if (index < 0) return
        while (index >= arr.length) arr.push(0)
        arr[index] = value
    }

    //% blockId="ap_length" block="length of %arr"
    //% arr.shadow=variables_get
    export function length(arr: number[]): number {
        if (!arr) return 0
        return arr.length
    }

    //% blockId="ap_indexOf" block="index of %value in %arr"
    //% arr.shadow=variables_get
    export function indexOf(arr: number[], value: number): number {
        if (!arr) return -1
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) return i
        }
        return -1
    }

    //% blockId="ap_contains" block="contains %value in %arr?"
    //% arr.shadow=variables_get
    export function contains(arr: number[], value: number): boolean {
        return indexOf(arr, value) !== -1
    }

    //% blockId="ap_sum" block="sum of %arr"
    //% arr.shadow=variables_get
    export function sum(arr: number[]): number {
        if (!arr) return 0
        let s = 0
        for (let v of arr) s += v
        return s
    }

    //% blockId="ap_average" block="average of %arr"
    //% arr.shadow=variables_get
    export function average(arr: number[]): number {
        if (!arr || arr.length == 0) return 0
        return sum(arr) / arr.length
    }

    // simple selection sort for compatibility with PXT
    function selectionSortAsc(arr: number[]): void {
        for (let i = 0; i < arr.length - 1; i++) {
            let minIdx = i
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j
            }
            if (minIdx != i) {
                let t = arr[i]
                arr[i] = arr[minIdx]
                arr[minIdx] = t
            }
        }
    }

    //% blockId="ap_sortAsc" block="sort %arr ascending"
    //% arr.shadow=variables_get
    export function sortAsc(arr: number[]): number[] {
        if (!arr) return []
        selectionSortAsc(arr)
        return arr
    }

    //% blockId="ap_sortDesc" block="sort %arr descending"
    //% arr.shadow=variables_get
    export function sortDesc(arr: number[]): number[] {
        if (!arr) return []
        selectionSortAsc(arr)
        // reverse
        let i = 0
        let j = arr.length - 1
        while (i < j) {
            let t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
        return arr
    }

    //% blockId="ap_shuffle" block="shuffle %arr"
    //% arr.shadow=variables_get
    export function shuffle(arr: number[]): number[] {
        if (!arr) return []
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
        }
        return arr
    }

    //% blockId="ap_concat" block="concat %a and %b"
    //% a.shadow=variables_get
    //% b.shadow=variables_get
    export function concat(a: number[], b: number[]): number[] {
        if (!a) a = []
        if (!b) b = []
        let out: number[] = []
        for (let v of a) out.push(v)
        for (let v of b) out.push(v)
        return out
    }

    //% blockId="ap_unique" block="unique elements of %arr"
    //% arr.shadow=variables_get
    export function unique(arr: number[]): number[] {
        if (!arr) return []
        let out: number[] = []
        for (let v of arr) {
            let found = false
            for (let w of out) {
                if (w == v) {
                    found = true
                    break
                }
            }
            if (!found) out.push(v)
        }
        return out
    }
}