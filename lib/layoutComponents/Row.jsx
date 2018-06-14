
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
            _children.map((_col, index) => <Col span={_col.col ? _col.col : null} key={`${props.key}.${index}`}>
                {elementWalk([_col], yakaApis, `${props.key}.${index}`)}
            </Col>)
        }
    </Row>
}
