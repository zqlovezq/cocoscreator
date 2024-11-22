/**
 * Created by ChengZheLin on 2019/6/4.
 * Features: node
 */
import { Children } from './index';
export default class Node {
    key: string;
    word: boolean;
    parent: Node | undefined;
    children: Children;
    failure: Node | undefined;
    constructor(key: string, parent?: Node | undefined, word?: boolean);
}
