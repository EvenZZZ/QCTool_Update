from django import template
register = template.Library()

@register.filter(name='key')
def key(value, arg):
    # try:
    #     val = int(arg)
    #     if arg >= len(value):
    #         return value[-1]
    # except ValueError:
    #     pass
    return value[arg]