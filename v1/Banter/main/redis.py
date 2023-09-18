import redis

r = redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB)

def set_value(key, value):
    r.set(key, value)

def get_value(key):
    return r.get(key)
