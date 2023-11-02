import { useContext, useEffect, useState } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { observer } from 'mobx-react';
import Store from '../../store';
import IndexApi from '../../apis/index';
import './index.scss';

function Index() {
  const [count, setCount] = useState(0);

  const { counterStore } = useContext(Store);

  const getData = () => {
    const data = {
      taskuuid: 'queryprod',
      splist: '2',
    };
    IndexApi.getBigData(data).then((res) => {
      console.log('getBigData', res);
    });
  };

  useEffect(() => {
    console.log('store');
    getData();
  }, []);

  // 点击按钮改变store状态
  const handleClick = () => {
    // 修改mobx中的数据状态
    counterStore.addStore();
    // 修改组件中的数据状态
    setCount(count + 1);
  };

  return (
    <View>
      <Text>
        函数组件状态：{count} || mobx中的状态: {counterStore.counter}
      </Text>
      <Button onClick={() => handleClick()}>+1</Button>
    </View>
  );
}

export default observer(Index);
