import { ModelProviderCard } from '@/types/llm';

// ref https://platform.stepfun.com/docs/llm/text
const Stepfun: ModelProviderCard = {
  chatModels: [
    {
      enabled: true,
      id: 'step-1-256k',
      tokens: 32_768,
    },
    {
      enabled: true,
      id: 'step-1-128k',
      tokens: 32_768,
    },
    {
      enabled: true,
      id: 'step-1-32k',
      tokens: 32_768,
    },
    {
      enabled: true,
      id: 'step-1v-32k',
      tokens: 32_768,
      vision: true,
    },
    {
      id: 'step-1-8k',
      tokens: 8192,
    },
  ],
  checkModel: 'step-1-8k',
  // after test, currently https://api.stepfun.com/v1/chat/completions has the CORS issue
  // So we should close the browser request mode
  disableBrowserRequest: true,
  id: 'stepfun',
  modelList: { showModelFetcher: true },
  name: '阶跃星辰',
  proxyUrl: {
    desc: `除默认地址外，必须包含 http(s)://
由于 https://api.stepfun.com/v1/chat/completions 目前有 CORS 跨域问题
因此客户端请求模式暂时禁用`,
    placeholder: "https://api.stepfun.com/v1",
  }
};

export default Stepfun;
