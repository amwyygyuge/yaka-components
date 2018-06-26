
import React from 'react'
import { Row, Col, Form } from 'igroot'
export default function (item, { yakaApis, form, bindingProps, componentCheck, elementWalk }, props) {
    const FormItem = Form.Item
    const { subs, name } = item
    if (!subs) return null
    const { colWidth, labelCol, wrapperCol, gutter, key } = props
    const _subs = subs
    const rowNum = Math.floor(24 / colWidth)
    const times = Math.ceil(_subs.length / rowNum)
    const _children = []
    for (let i = 0; i < times; ++i) {
        _children.push(_subs.slice(i * rowNum, (i + 1) * rowNum))
    }
    const { getFieldDecorator } = form
    const styles = {
        title: {
            fontSize: 18,
            borderBottom: '2px solid #1DA57A',
            padding: '0 15px'
        },
        block: {
            background: '#fff'
        }
    }
    return <Row gutter={gutter ? gutter : 0} style={styles.block} key={key}>
        {
            _children.map((row, index) =>
                <Row gutter={gutter ? gutter : 0} key={`${key}.${index}`}>
                    {
                        row.map((col, subindex) => {
                            const colProps = bindingProps(col, yakaApis)
                            const { rules } = col
                            let Ele = ''
                            const formCreatFunc = element => getFieldDecorator(`${col.name}`, {
                                rules: rules ? rules : null
                            })(element)
                            Ele = elementWalk([col], yakaApis, `${key}.${index}.${subindex}`, formCreatFunc, 'formBlock')[0]
                            return <Col
                                span={col.col && col.col || colWidth}
                                key={`${key}.${index}.${subindex}`}
                            >
                                {

                                    colProps.show === false ? <div></div> : <FormItem
                                        label={col.label}
                                        labelCol={{ span: col.labelCol ? col.labelCol : labelCol }}
                                        wrapperCol={{ span: col.wrapperCol ? col.wrapperCol : wrapperCol }}
                                    >
                                        {Ele}
                                    </FormItem>
                                }
                            </Col>
                        }
                        )
                    }
                </Row>
            )
        }
    </Row>
}
