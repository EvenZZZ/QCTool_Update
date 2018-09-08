from django import template
register = template.Library()

@register.filter(name='merge_str')
def merge_str(value, arg):
    try:
        return str(value) + str(arg)
    except (TypeError):
        return ''