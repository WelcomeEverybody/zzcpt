<script lang="ts" setup>
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';

const code = 
`<CptShowText style="width:300px;">
    <p style="font-size: 14px;">
        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
    </p>
</CptShowText>
`
</script>

<template>
    <div>
        <h1>ShowText 显示文本</h1>
        <p>常用的显示文本</p>
        <h2>基础用法</h2>
        <div class="preview">
            <div>
                <CptShowText style="width:300px;">
                    <p style="font-size: 14px;">
                        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                    </p>
                </CptShowText>
            </div>
        </div>
        <Code :code="code" />
        <Attribute name="showtext" />
    </div>
</template>