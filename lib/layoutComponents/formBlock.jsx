
import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'igroot'
export default function (item, { yakaApis, form, bindingProps, componentCheck, elementWalk }, props) {
    const FormItem = Form.Item
    const { children, subs, name } = item
    const { colWidth, labelCol, wrapperCol, gutter, onSubmit, title, key } = props
    const _subs = subs || children
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
                            const { ele, component, value, rules } = col
                            const _ele = ele || component
                            let Ele = ''
                            if (col.name && _ele && componentCheck(_ele)) {
                                Ele = getFieldDecorator(`${col.name}`, {
                                    initialValue: value ? value : null,
                                    rules: rules ? rules : null
                                })(
                                    elementWalk([col], yakaApis, `${key}.${index}.${subindex}`)[0]
                                )
                            } else {
                                Ele = <div>不符合配置规则</div>
                            }
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
