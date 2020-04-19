hooks
=====

useWeinre
-----
Injects the weinre script in the body.

```
useWeinre(?"<url_weinre_target")
```

useModal
-----
The idea here is to avoid adding extra html in the components to show the modal.
The only issue is the extra ReactDOM.render which will require to wrap once again the ThemeContext and the i18nContext.


Usage:
```
import useModal, { MODALS } from './useModal';

const YourComponent = () => {
   const {open, close, toggle} = useModal(MODALS.myModal);

  return (
    <div>
        <button onClick={modal.open}>
        ....
    </div>
  )
}

```
