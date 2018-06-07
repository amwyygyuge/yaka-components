import React from 'react'
export default function (item, { yakaApis, bindingProps, componentCheck, elementWalk }, props) {
    const { value, eles, key } = props
    if (Array.isArray(eles)) {
        return <div>
            {eles.map(_ele => {
                const { ele } = _ele
                if (Array.isArray(value)) {
                    if (value.some(val => val === _ele.value)) {
                        return elementWalk(Array.isArray(ele) ? ele : [ele], yakaApis, key)
                    } else {
                        return null
                    }
                } else {
                    if (value === _ele.value) {
                        return elementWalk(Array.isArray(ele) ? ele : [ele], yakaApis, key)
                    } else {
                        return null
                    }
                }
            })}
        </div>
    } else {

        return eles.value === value ? elementWalk(Array.isArray(eles.ele) ? eles.ele : [eles.ele], yakaApis, key) : null
    }
}
