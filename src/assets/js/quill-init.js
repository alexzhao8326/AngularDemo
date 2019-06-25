var Parchment = Quill.import('parchment');
const ListDataColor = new Parchment.Attributor.Attribute('data-color','data-color',{
    scope:Parchment.Scope.BLOCK_ATTRIBUTE
});
Quill.register('formats/list/data-color',ListDataColor);
Quill.register(ListDataColor,true);