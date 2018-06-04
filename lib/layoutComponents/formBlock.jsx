
import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'igroot'
export default function (item, { yakaApis, form, bindingProps, componentCheck, elementWalk }) {
    const FormItem = Form.Item
    const { props, children, subs, name } = item
    const { colWidth, labelCol, wrapperCol, gutter, onSubmit, title } = props
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
    const _props = bindingProps(item, yakaApis)
    return <Row gutter={gutter ? gutter : 0} style={styles.block} key={name}>
        {
            _children.map((row, index) =>
                <Row gutter={gutter ? gutter : 0} key={`${name}${index}`}>
                    {
                        row.map((col, subindex) => {
                            const colProps = bindingProps(col, yakaApis)
                            const { ele, component, value, rules } = col
                            const _ele = ele || component
                            return <Col
                                span={col.col && col.col || colWidth}
                                key={`${name}${index}${subindex}`}>
                                {
                                    colProps.show === false ? <div></div> : <FormItem
                                        label={col.label}
                                        labelCol={{ span: col.labelCol ? col.labelCol : labelCol }}
                                        wrapperCol={{ span: col.wrapperCol ? col.wrapperCol : wrapperCol }}
                                    >
                                        {
                                            (_ele && componentCheck(_ele)) ? getFieldDecorator(`${col.name}`, {
                                                initialValue: value ? value : null,
                                                rules: rules ? rules : null
                                            })(
                                                elementWalk([col], yakaApis)[0]
                                            ) : <div>非法表单组件</div>
                                        }
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
