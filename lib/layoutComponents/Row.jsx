
import React from 'react'
import { Row, Col } from 'igroot'

export default function (item, { yakaApis, bindingProps, elementWalk }) {
    const props = bindingProps(item, yakaApis)
    const { subs, children,name } = item
    const _children = subs || children
    if ('style' in props) {
        Object.assign({ marginTop: 15 }, props.style)
    } else {
        props.style = { marginTop: 15 }
    }
    return <Row {...props} >
        {
            _children.map((col, index) => <Col span={col.col && col.col || 0} key={`${name}-${index}`}>
                {elementWalk([col], yakaApis)}
            </Col>)
        }
    </Row>
}
