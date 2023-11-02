import { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import "./index.scss";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count + 1)}>我的</Button>
    </View>
  );
}

export default observer(Index);
