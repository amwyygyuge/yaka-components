
import React from 'react'
import { Row, Col } from 'igroot'

export default function (item, { yakaApis, bindingProps, elementWalk }, props) {
    const { subs, children, name } = item
    const _children = subs || children
    if ('style' in props) {
        Object.assign({ marginTop: 15 }, props.style)
    } else {
        props.style = { marginTop: 15 }
    }
    return <Row {...props} >
        {
            _children.map((col, index) => <Col span={col.col && col.col || 0} key={`${props.key}.${index}`}>
                {elementWalk([col], yakaApis, `${props.key}.${index}`)}
            </Col>)
        }
    </Row>
}
